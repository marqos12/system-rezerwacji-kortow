module.exports = {
  initRoutes: (app) => {

    reservations=[];
    courtStatistics=[];
    personStatistics=[];

    app.get('/api/hello', (req, res) => {
      res.json({ message: 'Hello from backend' });
    });
    app.get('/api/reservation', (req, res) => {
      res.json(reservations);
    });
    app.post('/api/reservation', (req, res) => {
     
      
      let id = reservations.findIndex(x=>x.id==req.body.id&&x.hour==req.body.hour);
      if(id<0){
      reservations.push(req.body);
      let exist = false;
      courtStatistics.map(x=>{
        if(x.id==req.body.id){
          x.value++;
          exist=true;
        }
      })
      if(!exist)
        courtStatistics.push({id:req.body.id,value:1})
      
      exist = false;
      personStatistics.map(x=>{
        if(x.name==req.body.name){
          x.value++;
          exist=true;
        }
      })
      if(!exist)
        personStatistics.push({name:req.body.name,value:1})
      
      res.json({ message: "Reservation success" });
    }
    else 
    res.sendStatus(403)
    });
    app.get('/api/statistics', (req, res) => {
      personStatistics= personStatistics.sort((a,b)=>{return b.value-a.value})
      res.json({courts: courtStatistics, people:personStatistics});
    });
  }
};

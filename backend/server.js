const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const { request } = require('express');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.listen(3000, function() {
    console.log('listening on 3000')
  })

  
  
  /*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  }) */

  
  /*app.post('/api', (req, res) => {
    console.log(req.body)
  })*/
  
  
  MongoClient.connect('mongodb+srv://luc_vg:Getjinxed1@cluster0.ijp7r.mongodb.net/projet_web?retryWrites=true&w=majority', {
    useUnifiedTopology: true })
    .then(client => {

    console.log('Connexion to Database : Established') 

    const db = client.db('api-backend')
    const apiCollection = db.collection('api-requests')     


    app.set('view engine', 'ejs')  

    app.get('/', (req, res) => {
      db.collection('api-requests').find().toArray()
        .then(results => {
          res.render('index.ejs', { /*BDD nom donné à la colonne qu'on récupère*/quotes: results })
        })        
      }) 
    
    app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
      { name: 'Lucas' },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      },
      {
        upsert: true
      }
    )
    .then(result => {
      console.log(result)
     })
      .catch(error => console.error(error))
    })     
})
.catch(error => console.error(error)) /*Promises with .then -> éviter les erreurs*/



  /*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  }) 


    //POST MENTION 

    app.post('/api', (req, res) => {
      apiCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
          console.log(req.body)
                })
        .catch(error => console.error(error))
    })*/



    /* GET MENTION

     app.get('/', (req, res) => {
      db.collection('api-requests').find().toArray()
        .then(results => {
          res.render('index.ejs', { /*BDD nom donné à la colonne qu'on récupèrequotes: results })
        })        
      }) 

    /* PUT MENTION

    app.put('/quotes', (req, res) => {
    console.log(req.body)
    })*/

    
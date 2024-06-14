const{Sequelize, DataTypes}=require('sequelize')


const sequelize=new Sequelize('Blog','root','8794',{
    host:'localhost',
    dialect:'mysql'
})

try{
    sequelize.authenticate();
    console.log('Connection to Database has been established successfully.');
}
catch(error){
    console.error('Error in Connecting to Database')
}
const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.user=require('./users')(sequelize,DataTypes)
db.posts=require('./post')(sequelize,DataTypes)

sequelize.sync({alter:true})

module.exports=db;
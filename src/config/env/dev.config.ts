


export default ()=> ({

    port:process.env.PORT , 
    db:{
        url:process.env.DB_URL
    } ,

    tokenAccess:{} ,
    cloud:{} ,

access:{
    jwt_secret:process.env.JWT_SECRET
}



})

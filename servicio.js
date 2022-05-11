//PASOS PARA CONSUMIR UN API CON JS PURO

//1. DECLARO LA URI (OA ONDE VOY)
const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

//2. DECLARA LOS PARAMETROS DE LA PETICION (QUE VOY A HACER?)

const TOKEN="Bearer BQBa-5fRV39s1Mmd9RjYG0yP52A9bcs7CJ5pvSTWFl5_YIp1PsYshvzi1c-vjSl1tPWEGfGOfYSow2w1uFsc2nLcS-Hoy5cA3F38Soy83lTtNmSAExV3bd_9CMmXZhuDds1JbHcsVVeMa4z7Ry0"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3. DECLARO EL FETCH (VOY AL SERVIDOR OME)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto
    console.log(respuesta.tracks)
    


    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta){
    console.log(respuesta)
})
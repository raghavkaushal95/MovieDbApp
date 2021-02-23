sum = 3+5;
console.log("Addition of 3 and 5 is"+ sum);

 const base_img =  "https://image.tmdb.org/t/p/w780";

 //fetchMovies();

 function fetchMovies()
 {
      fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
      .then(response =>
          {

            if(response.ok)
            return response.json();

            else
            throw new Error("Unable to Fetch the data from API");

          })

      .then(data=>
        {
            console.log(data);
/*  for (var i = 0; i < data.results.length; i++)
  {
      let data1 = data.results[i].overview ;
      console.log(data1);
  }
*/        let template = 'abracadabra'
          template ='';
/*//let template =
          `<div>
          <img src="">
           <h5> </h5>
           <a></a>
           </div>
           `;*/

      for (var i = 0; i < data.results.length; i++)
        {
           let movie_title = data.results[i].title;

           let movie_id = data.results[i].id;
          // let image = base_img+ data.results[i].poster_path;
          // console.log(data1);
          const image = document.createElement('img');
        //  image.className = 'myImage';
          image.src = base_img+ data.results[i].poster_path;

              template = template +  `
                 <div>
                 <img src="${image.src}" class="myImage">
                 <h5>${movie_title} </h5>
                 <a onclick="selectedMovie('${movie_id}')" class="button" href="#">Movie Details</a>
                 </div>
                       `;
//<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//"movieSelected('${movie.imdbID}')"
        }
//document.getElementsByClassName("films").innerHTML= template;
 document.getElementById("films").innerHTML = template;



    });

} //FETCHING ALL POPULAR TITLES ON THE HOME SCREEN


let new_H = document.createElement('h2');
  new_H.className="hub_boss";

  let new_div = document.createElement('div');
      new_div.setAttribute("id", "Div1");

function myFunction()    //simply returns the results from the homepage when search is performed.
{

  var searchQuery=   document.querySelector(".searchTerm").value;

  console.log("The search query from home page is "+ searchQuery);
  //document.body.appendChild(new_div);








// if(window.location=='homepage.html')
  document.getElementById("films").innerHTML ="";






  //if(window.location=='moviePage.html')
  //  document.getElementById("film").innerHTML ="";

  //  if(document.body.contains(document.querySelector('hub')))
    //   { // document.querySelector(".hub").innerHTML="";
        var old_H = document.querySelector(".hub");
       if(document.body.contains(document.querySelector('.hub')))
           {
               console.log("ifloop");
               old_H.remove();
            // document.querySelector(".hub").innerHTML="";
            new_H.innerHTML=" Particular Movie Search Results from HOMEPAGE for the "+searchQuery;
                document.querySelector(".Heading").appendChild(new_H);
          // old_H.remove();
       }
       else{
              console.log("else");
         new_H.innerHTML=" Particular Movie Search Results for "+searchQuery;
         document.querySelector(".Heading").appendChild(new_H);


       }


       if(document.body.contains(document.getElementById('btner')))
       {




       }


else{
      var btn= document.createElement("BUTTON");
      btn.innerHTML="Go Back right now";
      btn.id= 'btner';
//btn.setAttribute("id","btner");

      document.querySelector(".Heading").appendChild(btn);


 // Add an onclick function call to that button element
      document.getElementById('btner').onclick = function()
      {
       // The funtion should wipe away the searcher code  that displays query results and reinstate the <films> div code
        document.getElementById("searcher").innerHTML="";
       //the films <div> code basically should show film popularity results again(callling fecthResults funtion again)
        fetchMovies();
      // The button should disappear as soon as the popularity results show up.
        btner.remove();
        new_div.remove();

     };
}






//       }

  //document.querySelector(".hub").innerHTML="Particular movie for"+searchQuery;


//  var heading =  "Particular movie for"+searchQuery;

//document.getElementById("begin").appendChild(new_H);
//

 //fetch("https://api.themoviedb.org/3/search/movie?api_key={api_key}&query="+searchQuery);


// Create a Button Element here using javascript code
// Add an onclick function call to that button element
// The funtion should wipe away the searcher code  that displays query results and reinstate the <films> div code
// the films <div> code basically should show film popularity results again(callling fecthResults funtion again)
// The button should disappear as soon as the popularity results show up.


// Create a Button Element here using javascript code
/*var btn= document.createElement("BUTTON");
btn.innerHTML="Go Back";
document.body.appendChild(btn);
*/

fetch("https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="+searchQuery)
.then(response =>{
     if(response.ok)
     {
       return response.json();
     }

     else
     throw new Error("Unable to Fetch the data from API");




})




.then(data=> {

      console.log(data);


       let template = 'abracadabra'
              template ='';
      /*//let template =
              `<div>
              <img src="">
               <h5> </h5>
               <a></a>
               </div>
               `;*/

          for (var i = 0; i < data.results.length; i++)
            {
               let movie_title = data.results[i].title;

               let movie_id = data.results[i].id;
              // let image = base_img+ data.results[i].poster_path;
              // console.log(data1);
              const My_image = document.createElement('img');
            //  image.className = 'myImage';
              My_image.src = base_img+ data.results[i].poster_path;

                  template = template +  `
                     <div class="searcherDiv">
                     <img src="${My_image.src}" class="searchmyImage">
                     <h5 class="searcherH_five">${movie_title} </h5>
                     <a onclick="selectedMovie('${movie_id}')" class="searcherbutton" href="#">Movie Details</a>
                     </div>
                           `;
      //<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
      //"movieSelected('${movie.imdbID}')"
            }
      //document.getElementsByClassName("films").innerHTML= template;
      document.getElementById("searcher").innerHTML = template;



















});














}
let new_Head = document.createElement('h2');
  new_Head.className="hubber";


function myFunction2()   // //simply returns the results from the particular page when search is performed.
{
  var searchQuery=   document.querySelector(".MoviesearchTerm").value;

    var search_x = document.querySelector(".search");
  document.getElementById("film").innerHTML ="";



/*


      document.getElementById("film").innerHTML = movie_template;

// document.querySelector(".singleMovie").appendChild(btn2);
     var mov_img = document.querySelector(".movieImage"); //reference_node
  //   mov_img.insertBefore(btn2,mov_img);
 mov_img.parentNode.insertBefore(btn2,mov_img);





       var btn2 = document.createElement("BUTTON");
 //var btn2 = document.createElement("BUTTON");
 btn2.innerHTML="Go Back to previous";
    btn2.id='btnerx';
    document.getElementById("film").appendChild(btn2);
    document.getElementById("btnerx").onclick = function()
    {
        //window.history.back();
        history.go(-1);
       // document.getElementById("searcher").innerHTML="";
       //the films <div> code basically should show film popularity results again(callling fecthResults funtion again)
       // fetchMovies();
      // The button should disappear as soon as the popularity results show up.
       // btner.remove();
     //   new_div.remove();

    };






*/
//var search_x = document.querySelector(".search");


  new_Head.innerHTML=" Particular Movie Search Results for "+searchQuery;
    //  document.body.appendChild(new_Head);
     search_x.parentNode.insertBefore(new_Head,search_x);
      console.log(searchQuery);


var btn3 =document.createElement("BUTTON");
btn3.innerHTML="Go Back Previous";

btn3.id ='btnBald';

search_x.parentNode.insertBefore(btn3,search_x);

document.getElementById("btnBald").onclick =  function()
  {

    history.go(0);


  }







      fetch("https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="+searchQuery)


//  var old_H = document.querySelector(".hubber");
// if(document.body.contains(document.querySelector('.hubber')))

      //   console.log("if loop movie.html");
      //   old_H.remove();
      // document.querySelector(".hub").innerHTML="";
    //  new_Head.innerHTML=" Particular Movie Search Results for "+searchQuery;
      //    document.querySelector(".Heading").appendChild(new_H);
    // old_H.remove();
   .then(response=>{
     if(response.ok)
        return response.json();

    else
    throw new Error('Unable to fetch the data');

   })

   .then(data=>{
     console.log(data);

     let template=``;
     let array = data.results;

     array.forEach(item =>
       {
          //  console.log(item); // Logs each 'Item #'
            let movie_title = item.title;
            console.log(movie_title);

            var movie_image = document.createElement("img");
            movie_image.src = base_img + item.poster_path;
              let movie_id = item.id;


            template = template +  `
               <div class="film_searcherDiv">
               <img src="${movie_image.src}" class="searchmyImage">
               <h5 class="searcherH_five">${movie_title} </h5>
               <a onclick="selectedMovie('${movie_id}')" class="searcherbutton" href="#">Movie Details</a>
               </div>
                     `;







      });

  document.getElementById("film_searcher").innerHTML = template;


   });



}

function selectedMovie(id)
{
   sessionStorage.setItem("movieID",id);
   window.open("moviePage.html",'_self');
   return false;

}
function fetchMovieDetails()
{

  var movieId = sessionStorage.getItem("movieID");
    fetch("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=04c35731a5ee918f014970082a0088b1")
    .then( res =>{

      if(res.ok){
         return res.json();
      }
      else
      throw new Error("Unable to Fetch the data from the movie");

    })
    .then(data =>{




/*
      var btn= document.createElement("BUTTON");
      btn.innerHTML="Go Back right now";
      btn.id= 'btner';
    //btn.setAttribute("id","btner");

      document.querySelector(".Heading").appendChild(btn);

      document.getElementById('btner').onclick = function()
      {
       // The funtion should wipe away the searcher code  that displays query results and reinstate the <films> div code
        document.getElementById("searcher").innerHTML="";
       //the films <div> code basically should show film popularity results again(callling fecthResults funtion again)
        fetchMovies();
      // The button should disappear as soon as the popularity results show up.
        btner.remove();
        new_div.remove();

     };
     */

    // Add an onclick function call to that button element


 // create a button
 //attach an ID to it
 //go back to the previous Page
//

      var btn2 = document.createElement("BUTTON");
//var btn2 = document.createElement("BUTTON");
btn2.innerHTML="Go Back to previous";
   btn2.id='btnerx';
   document.getElementById("film").appendChild(btn2);
   document.getElementById("btnerx").onclick = function()
   {
       //window.history.back();
       history.go(-1);
      // document.getElementById("searcher").innerHTML="";
      //the films <div> code basically should show film popularity results again(callling fecthResults funtion again)
      // fetchMovies();
     // The button should disappear as soon as the popularity results show up.
      // btner.remove();
    //   new_div.remove();

   };

var movie_genres='';
      for(var j=0;j<data.genres.length;j++)
      {
        if(movie_genres!='')
         movie_genres =movie_genres+"-"+ data.genres[j].name;

         else
         movie_genres = data.genres[j].name;

      }
        console.log(data);
        document.title= data.original_title;
movie_template ='';
const movie_image = document.createElement('img');
movie_image.src = base_img+ data.poster_path;

movie_template = `
                   <div class="singleMovie">
                     <img src="${movie_image.src}" class="movieImage">
                      <div class ="titleCaption" >
                       <h5 class="MovieCaption"> Movie name: </h5>
                       <h5 class="MovieTitle">${data.original_title}</h5>
                      </div>
                      <div class="RatingCaption">
                      <h5 class="MovieRated"> Movie rating: </h5>
                      <h5 class="RatingValue">${data.vote_average}</h5>
                      </div>
                      <div class="GenreCaption">
                      <h5 class="GenreRated"> Movie Genre: </h5>
                      <h5 class="GenreValue">${movie_genres}</h5>
                     </div>

                     <div class="MovieDescription">
                     <h5> MoviePlot </h5>
                     <p>  ${data.overview}  </p>
                     </div>

                  </div>

                  `;

      document.getElementById("film").innerHTML = movie_template;

// document.querySelector(".singleMovie").appendChild(btn2);
     var mov_img = document.querySelector(".movieImage"); //reference_node
  //   mov_img.insertBefore(btn2,mov_img);
 mov_img.parentNode.insertBefore(btn2,mov_img);


    });




}

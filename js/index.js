
var displayrow = document.getElementById("rowdata");
var Categorydata = document.getElementById("Categorydata");
var Categorydetails = document.getElementById("Categorydetails");
var rowdatainstr = document.getElementById("rowdatainstr");
var search = document.getElementById("search");
var loc = document.getElementById("location");
var rowcontact = document.getElementById("rowcontact");
var Ingredient = document.getElementById("Ingredient");
var loading = document.querySelector(".loading");
var allmeals=[];



async function getmeals()
{
  loading.classList.remove('d-none');
  var response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  var data = await response.json();
  
 allmeals = data.meals;
 loading.classList.add('d-none');
 displaymeals();
 
}

function displaymeals()
{
  var cartona = "";
  for(var i=0; i< allmeals.length ;i++)
  {
    cartona+=
    `
            <!-- start grid -->
         <div class=" col-md-3 gy-5   ">
          <div  onclick="getmealdetails('${allmeals[i].idMeal}')"  class="bg-white rounded-4 text-center  shadow-lg overflow-hidden " >
              <div  class="meal-image">
                <img src="${allmeals[i].strMealThumb}" class="w-100" alt="">
                <div class="layer">
                    <div class="layer-text">
                    <h5 class="position-absolute text-black  fs-3 ps-2 top-50">${allmeals[i].strMeal}</h5>
                    </div>
                </div>
          </div>
       
       <!-- end grid -->
        </div>
      </div>
    `
  }
  displayrow.innerHTML = cartona;

}

async function getmealdetails(mealID)
{
  loading.classList.remove('d-none');
  displayrow.innerHTML = "";
  search.innerHTML=""
  loc.innerHTML=""
  Ingredient.innerHTML=""
  Categorydetails.innerHTML="";
  let   respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
  respone = await respone.json();

  loading.classList.add('d-none');
  displaymealdetails(respone.meals[0])
  
}


function displaymealdetails(meal)
{ var cartona = "";
 
    cartona+= 
    `
    <div class="col-4 ">
        <div class="meal-image-inst">
          <img src="${meal.strMealThumb}" class="w-100 rounded-4" alt="">
          <h5 class="text-white fs-3">${meal.strMeal}</h5>
      </div>
     </div>


     <div class="col-8 pb-5">
      <h5 class="text-white fs-3">Instructions</h5>
      <p class="text-white">${meal.strInstructions}</p>
      <h4 class="text-white">Area : ${meal.strArea}</h4>
      <h4 class="text-white">Category : ${meal.strCategory}</h4>
      <h4 class="text-white mb-3">Recipes :</h4>
      <span class="bg-info p-1 rounded-3">1 cup Lentils</span>
      <span class="bg-info p-1 rounded-3">1 cup Lentils</span>

      <h4 class="text-white mt-3 mb-3">Tags :</h4>
      <span class="bg-danger-subtle p-1 rounded-3 ">${meal.strTags}</span>

      <div class="links mt-4">
        <a target="_blank"  href="${meal.strSource}" class="bg-success pt-2 ps-3 pe-3 pb-2 rounded-3 text-decoration-none text-white"> Source</a>
        <a target="_blank" href="${meal.strYoutube}" class="bg-danger pt-2 ps-3 pe-3 pb-2 rounded-3 text-decoration-none text-white"> Youtube</a>


      </div>     

    </div>
    `

    rowdatainstr.innerHTML = cartona;

}
getmeals()

$('.menu i').on('click',function(){
  $('.content').animate({width:'toggle', paddingInline:'toggle'}, 400)
})


var allCategory=[];
async function getCategory()
{
   displayrow.innerHTML = "";
   search.innerHTML="";
    loc.innerHTML=""
      Ingredient.innerHTML=""
      rowcontact.innerHTML=""
      Categorydetails.innerHTML=""
      rowdatainstr.innerHTML=""
  loading.classList.remove('d-none');
  var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  var data = await response.json();
  allCategory = data.categories;
 
  loading.classList.add('d-none');
  displayCategory()

 
}
var allcatdetails=[];
function displayCategory()
{
  var cartona = "";
  for(var i=0; i< allCategory.length ;i++)
  {
    cartona+=
    `
     <!-- start grid -->
         <div class=" col-md-3 gy-5   ">
          <div onclick=" getcatdetails('${allCategory[i].strCategory}')" class=" rounded-3 text-center  shadow-lg overflow-hidden " >
              <div  class="meal-image">
                <img src="${allCategory[i].strCategoryThumb}" class="w-100" alt="">
                <div class="layer  ">
                    <div class="layer-text">
                    <h5 class=" text-black fw-bold fs-3 ">${allCategory[i].strCategory}</h5>
                    <p class="myp" >${allCategory[i].strCategoryDescription}</p>
                    </div>
                </div>
          </div>
       
       <!-- end grid -->
        </div>
      </div>
           
    `
  }
  Categorydata.innerHTML = cartona;

}



async function getcatdetails(cat)
{
  loading.classList.remove('d-none');
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
    Ingredient.innerHTML=""
    rowcontact.innerHTML=""
    search.innerHTML=""
  let   response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
 var data = await response.json();
 allcatdetails= data.meals;
 displaycatdetails();
 loading.classList.add('d-none');
}


function  displaycatdetails()
{  
  var cartona = "";
  for(var i=0; i<  allcatdetails.length ;i++)
  {
    cartona+=
    `
     <!-- start grid -->
         <div class=" col-md-3 gy-5   ">
          <div onclick="getmealdetails('${allcatdetails[i].idMeal}')"  class=" rounded-4 text-center  shadow-lg overflow-hidden " >
              <div  class="meal-image">
                <img src="${ allcatdetails[i].strMealThumb}" class="w-100 h-100" alt="">
                <div class="layer">
                    <div class="layer-text">
                    <h5 class=" text-black fw-bold fs-3 pt-4">${ allcatdetails[i].strMeal}</h5>
                 
                    </div>
                </div>
          </div>
       
       <!-- end grid -->
        </div>
      </div>
           
    `
  }
  Categorydetails.innerHTML = cartona;

}

function showsearch()
{
   loading.classList.remove('d-none');
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
  rowdatainstr.innerHTML="";
  loc.innerHTML=""
  Ingredient.innerHTML=""
  rowcontact.innerHTML=""
  search.innerHTML=""
  var cartona = "";
  cartona+=
  `
  <input type="text"  onkeyup="searchbyname(this.value)" class="form-control bg-transparent nameInput  w-50 mx-auto my-2 text-white" placeholder="Search by name..."> 
 <input type="text"  onkeyup="searchbyletter(this.value)"   class="form-control  letterInput bg-transparent  w-50 mx-auto my-2 text-white" placeholder="Search by first letter..."> 
 
  `
  search.innerHTML=cartona;
 loading.classList.add('d-none');
}


async function searchbyname(name)
{
  
  loading.classList.remove('d-none');
  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  var data = await response.json();
  
  allmeals = data.meals;
  loading.classList.remove('d-none');
  displaymeals();
  
  loading.classList.add('d-none');
}

async function searchbyletter(name)
{
  
  loading.classList.remove('d-none');
  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`);
  var data = await response.json();
  
  allmeals = data.meals;
  loading.classList.remove('d-none');
  displaymeals();
  
  loading.classList.add('d-none');
}

var allareas=[];
async function getarea()
{
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
  rowdatainstr.innerHTML="";
  Ingredient.innerHTML=""
  rowcontact.innerHTML=""
  loading.classList.remove('d-none');
  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  var data = await response.json();
   allareas= data.meals;
 loading.classList.add('d-none');
 displayarea();
}


function displayarea()
{

  var cartona = "";
  for(var i=0; i< allareas.length ;i++)
  {
    cartona+=
    `
       <!-- start grid -->
                  <div onclick="getareameal('${allareas[i].strArea}')" class=" col-md-3 gy-5  text-center ">
                        <div class="location  p-5 mb-4 ">
                         <div class="location-icon">
                          <i class="fa-solid fa-map-location-dot text-white fs-1 "></i>
                         </div>
                        <h5 class=" text-black fw-bold fs-3 text-white">${allareas[i].strArea}</h5>
                        </div>
                 
                  </div>   
                   <!-- end grid --> 
    `
  }
  loc.innerHTML = cartona;

}


async function getareameal(a)
{
  loading.classList.remove('d-none');
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
  loc.innerHTML=""
  rowcontact.innerHTML=""
  let   response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`);
 var data = await response.json();
 allmeals= data.meals;
displaymeals();
 loading.classList.add('d-none');

}

var allIngredient=[];
async function getIngredient()
{
  loading.classList.remove('d-none');
  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  var data = await response.json();
  allIngredient= data.meals.slice(0, 20);
 loading.classList.add('d-none');
 displayIngredient();
}


function displayIngredient()
{
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
  rowdatainstr.innerHTML="";
  search.innerHTML="";
  loc.innerHTML=""
  rowcontact.innerHTML=""
  var cartona = "";
  for(var i=0; i< allIngredient.length ;i++)
  {
    cartona+=
    `
       <!-- start grid -->
                  <div onclick="getIngredientmeal('${allIngredient[i].strIngredient}')" class=" col-md-3 gy-5  text-center  ">
                        <div class="location  mb-4 ">
                         <div class="location-icon">
                         <i class="fa-solid fa-drumstick-bite text-white fs-1 "></i>
                          
                         </div>
                        <h5 class="  fw-bold fs-4 text-white">${allIngredient[i].strIngredient}</h5>
                        <p class="text-white  h-50  w-100 Ingredientp">${allIngredient[i].strDescription}</p>
                        </div>
                 
                  </div>   
                   <!-- end grid --> 
    `
  }
  Ingredient.innerHTML = cartona;

}

async function getIngredientmeal(ingr)
{
  loading.classList.remove('d-none');
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
  loc.innerHTML=""
  Ingredient.innerHTML=""
  rowcontact.innerHTML=""
  let   response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`);
 var data = await response.json();
 allmeals= data.meals;
displaymeals();
 loading.classList.add('d-none');

}











function displaycontact()
{
  displayrow.innerHTML = "";
  Categorydata.innerHTML = "";
  Categorydetails.innerHTML="";
  rowdatainstr.innerHTML="";
  search.innerHTML="";
  loc.innerHTML=""
  Ingredient.innerHTML=""
  rowcontact.innerHTML=
  `
     <div class="row ">
      <div class="col-md-6  " >
        <input onkeyup="inputsvalidation()" type="text" class="form-control mx-auto my-2 " placeholder="Enter Your Name" id="inputname"> 
      </div>
      <div class="col-md-6  " >
        <input type="email" class="form-control    mx-auto my-2 " placeholder="Enter Your Email"> 
      </div>
      <div class="col-md-6 " >
        <input type="text" class="form-control    mx-auto my-2 " placeholder="Enter Your Phone"> 
      </div>
      <div class="col-md-6 " >
        <input type="number" class="form-control    mx-auto my-2 " placeholder="Enter Your Age"> 
      </div>
      <div class="col-md-6 " >
        <input type="password" class="form-control    mx-auto my-2 " placeholder="Enter Your Password"> 
      </div>
      <div class="col-md-6 " >
        <input type="password" class="form-control   mx-auto my-2 " placeholder="Repassword"> 
      </div>
    </div>
  
    <button type="submit"  class="btn btn-outline-danger disabled mt-3">Submit</button>
  
  `
}


document.getElementById('root').innerHTML = `

<header class="header">
    <a href="#">
        <img src="img/logos/omnifood-logo.png" alt="Logo" class="logo">
    </a>
    
    <nav class="main-nav">
        <ul class="main-nav-list">
            <li><a class="main-nav-link" href="#howitworks" >How it works</a></li>
            <li><a class="main-nav-link" href="#meals" >Meals</a></li>
            <li><a class="main-nav-link" href="#testimonials" >Testimonials</a></li>
            <li><a class="main-nav-link" href="#pricing" >Pricing</a></li>
            <li><a class="main-nav-link nav-cta" href="#tryforfree" >Try for free</a></li>
        </ul>
    </nav>

    <button class="btn-mobile-nav">
        <ion-icon class = "icon-mobile-nav" name="menu-outline" id="menu-mobile"></ion-icon>
        <ion-icon  class = "icon-mobile-nav" name="close-outline" id = "menu-close"></ion-icon>
    </button>
</header>

<main>
    <section class="section-hero">
        <div class="hero">
            <div class="hero-text-box">
                <h1 class="heading-primary">A healthy meal delieved to your door,every single day</h1>
            
            <p class="hero-description">
                The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
            </p>
            <a href="#" class="btn btn--full margin-right-sm">Start eating well</a>
            <a href="#" class="btn btn--outline">Learn more &darr;</a>
            <div class="delieved-meals">
                <div class="delieved-faces">
                    <img src="img/customers/customer-1.jpg" alt="Customer Photo">
                    <img src="img/customers/customer-2.jpg" alt="Customer Photo">
                    <img src="img/customers/customer-3.jpg" alt="Customer Photo">
                    <img src="img/customers/customer-4.jpg" alt="Customer Photo">
                    <img src="img/customers/customer-5.jpg" alt="Customer Photo">
                    <img src="img/customers/customer-6.jpg" alt="Customer Photo">
                </div>
                <p class="delieved-text"> <span>250,000+</span> meals delieved last year!</p>
            </div>
        </div>
            <div class="hero-img-box">
                <img src="./img/hero.png" class = "hero-img"alt="Women eating food">
            </div>
        </div>
    </div>
 </section>
 <section class="section-feature">
     <div class="container">
        <h2 class="heading-featured-in"> As featured in</h2>
      <div class="logos">
        <img src="img/logos/business-insider.png" alt=""/>
        <img src="img/logos/forbes.png" alt=""/>
        <img src="img/logos/techcrunch.png" alt="">
        <img src="img/logos/the-new-york-times.png" alt="">
        <img src="img/logos/usa-today.png" alt="">
      </div>
    </div>
 </section>
 <section class="section-how" id="howitworks">
    <div class="container">
        <span class="subheading">How it works</span>
        <h2 class="heading-secondary">Your daily dose of health in 3 simple steps</h2> 
    </div>
    <div class="container grid g-2-col g-c-v">
        <!-- STEP 1 -->
        <div class="step-text-box">
            <p class="stepnumber">01</p>
            <h3 class="heading-tertiary">Tell us what you like (and what not)</h3>
            <p class="step-description">
                Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
            </p>
        </div>
        <div class="step-img-box">
            <img src="img/app/app-screen-1.png" alt="Iphone App References" class= "step-img">
        </div>
         <!-- STEP 2 -->
            
                <div class="step-img-box">
                    <img src="img/app/app-screen-2.png" alt="Iphone App References" class= "step-img">
                </div>
           
            <div class="step-text-box">
                <p class="stepnumber">02</p>
                <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
                <p class="step-description">
                    Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.
                </p>
            </div>
         
        <!-- STEP 3 -->
       
        <div class="step-text-box">
            <p class="stepnumber">03</p>
            <h3 class="heading-tertiary">Receive meals at convenient time</h3>
            <p class="step-description">
                Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!
            </p>
        </div>
       
                <div class="step-img-box">
                    <img src="img/app/app-screen-3.png" alt="Iphone App References" class= "step-img">
                    </div>
        
        
        </div>
    </div>
     
 </section>
 <section class="section-meals" id="meals">
    <div class="container center-text">
        <span class="subheading">Meals</span>
        <h2 class="heading-secondary">Omnifood AI chooses from 5,000+ recipes</h2> 
    </div>

    <div class="container grid g-3-col margin-bottom-md">
        <div class="meal">
               <img src="img/meals/meal-1.jpg" alt="Japanese Gyozas">
               
              <div class="meal-content">
                <div class="meal-tags">
                    <span class="tag tag-veg">Vegetarian</span>
                   </div>
                <p class="meal-title">Japanese Gyozas</p>
               <ul class="meal-attributes">
                   <li class="meal-attribute"><ion-icon class = "meal-icon" name ="flame-outline"></ion-icon><span>Calories: <strong>650</strong>  </span></li>
                   <li class="meal-attribute"><ion-icon class = "meal-icon"name ="restaurant-outline"></ion-icon><span>NutriScore &reg; <strong>74</strong></span></li>
                   <li class="meal-attribute"><ion-icon class = "meal-icon" name="star-half-outline"></ion-icon><span><strong>4.9</strong> rating (537)</span></li>
               </ul>
              </div>
               
            
        </div>
        <div class="meal">
            <img src="img/meals/meal-2.jpg" alt="Avocado Salad">
            <div class="meal-content">
                <div class="meal-tags">
                    <span class="tag tag-vegan">Vegan</span>
                    <span class="tag tag-polio">Polio</span>
                </div>
                
                <p class="meal-title">Avocado Salad</p>
                <ul class="meal-attributes">
                    <li class="meal-attribute"><ion-icon class = "meal-icon" name ="flame-outline"></ion-icon><span>Calories: <strong>650</strong>  </span></li>
                    <li class="meal-attribute"><ion-icon class = "meal-icon"name ="restaurant-outline"></ion-icon><span>NutriScore &reg; <strong>74</strong></span></li>
                    <li class="meal-attribute"><ion-icon class = "meal-icon" name="star-half-outline"></ion-icon><span><strong>4.9</strong> rating (537)</span></li>
                </ul>
            </div>
            </div>
        <div class="diets">
            <h3 class="heading-tertiary">Works with any diet</h3>
            <ul class="list">
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon></ion-icon><span>Vegetarian</span></li>
               <li class = "list-items"><ion-icon class = "list-icon" name="checkmark-outline"></ion-icon><span>Vegan</span></li>
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Pescatarian</span></li>
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Gluten-free</span></li>
               <li class = "list-items"><ion-icon class = "list-icon" name="checkmark-outline"></ion-icon><span>Lactose-free</span></li>
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Keto</span></li>
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Paleo</span></li>
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Kid Friendly</span></li>
               <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Low Fod Map</span></li>
            </ul>
        </div>
   </div>
    <div class="container all-recipes ">
        <a href="#" class="link">See all recipes &rarr;</a>
    </div>    
 </section>

 <section class="section-testimonials" id="testimonials">
    <div class="testimonials-container">
        <span class="subheading">Testimonials</span>
        <h2 class="heading-secondary">Once you try it, you will buy it</h2> 
   
     <div class="testimonials">
        
         <figure class="testimonial">
             <img class ="testimonial-img" src="img/customers/dave.jpg" alt=""/>
             <blockquote class="testimonial-text">Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical</blockquote>
            <p class="testimonial-name">&mdash;Dave</p>
         </figure>
    
    
        <figure class="testimonial">
            <img class ="testimonial-img" src="img/customers/ben.jpg" alt=""/>
            <blockquote class="testimonial-text">The AI algorithm is crazy good, it chooses the right meals for me every time. It is amazing not to worry about food anymore! </blockquote>
           <p class="testimonial-name">&mdash;Ben</p>
        </figure>
      
   

        <figure class="testimonial">
            <img class ="testimonial-img" src="img/customers/hannah.jpg" alt=""/>
            <blockquote class="testimonial-text">Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</blockquote>
           <p class="testimonial-name">&mdash;Hannah</p>
        </figure>
   

    
        <figure class="testimonial">
            <img class ="testimonial-img" src="img/customers/steve.jpg" alt=""/>
            <blockquote class="testimonial-text">I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic. </blockquote>
           <p class="testimonial-name">&mdash;Steve</p>
        </figure>
      
  </div>
</div>
     <div class="gallery">
       <figure class="gallery-item">
           <img src="img/gallery/gallery-1.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-2.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-3.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-4.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-5.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-6.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-7.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-8.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-9.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-10.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
           <img src="img/gallery/gallery-11.jpg" alt="Photo of beautiful arranged food"/>
       </figure>
       <figure class="gallery-item">
        <img src="img/gallery/gallery-11.jpg" alt="Photo of beautiful arranged food"/>
    </figure>
       
     </div>
 </section>

 <section class="section-pricing" id="pricing">
    <div class="container">
        <span class="subheading">Pricing</span>
        <h2 class="heading-secondary">Eating well without breaking the bank!</h2> 
    </div>
    <div class="container grid g-2-col">
        <div class="pricing-plan pricing-plan-starter">
            <header class="plan-header center-text">
                <p class="plan-name">Starter</p>
                <p class="plan-rice"><span>$</span>249</p>
                <p class="plan-text">per month. Thats just $11 per meal</p>
            </header>
            <ul class="list">
                <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon></ion-icon><span>1 meal per day</span></li>
                <li class = "list-items"><ion-icon class = "list-icon" name="checkmark-outline"></ion-icon><span>Order from 11am and 9pm</span></li>
                <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Delivery is free</span></li>
                <li class = "list-items"><ion-icon class = "list-icon"name="close-circle-outline"></ion-icon><span>Get access to latest recipes</span></li>
            </ul>
            <div class="plan-sign-up">
                <a href="#" class="btn btn--full">Start eating well</a>
            </div>
           
        </div>
        <div class="pricing-plan bg">
            <header class="plan-header center-text">
                <p class="plan-name">Complete</p>
                <p class="plan-rice"><span>$</span>649</p>
                <p class="plan-text">per month. Thats just $20 per meal</p>
            </header>
      
            <ul class="list">
                <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon></ion-icon>
                    <span><strong>2 meals</strong> per day</span></li>
                <li class = "list-items"><ion-icon class = "list-icon" name="checkmark-outline"></ion-icon><span>Order <strong>24/7</strong></span></li>
                <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Delivery is free</span></li>
                <li class = "list-items"><ion-icon class = "list-icon"name="checkmark-outline"></ion-icon><span>Get access to latest recipes</span></li>
            </ul>
            <div class="plan-sign-up">
                <a href="#" class="btn btn--full">Start eating well</a>
            </div>
            
        </div>
    </div>
    </div>

    <div class="container grid margin-bottom-md">
        <aside class="plan-details">
            Prices include all applicable taxes. Users can cancel at any time.
        </aside>
    </div>
    <div class="container grid g-4-col">
        <div class="feature">
            <ion-icon class ="feature-icon" name="infinite-outline"></ion-icon>
            <p class="feature-title">
                Never Cook again!
            </p>
            <p class="feature-text">  Our subscriptions cover 365 days per year, even including major holidays.</p>
          
        </div>
        <div class="feature">
            <ion-icon class ="feature-icon" name="nutrition-outline"></ion-icon>
            <p class="feature-title">
                Local or organic
            </p>
            <p class="feature-text">  Our cooks only use local, fresh, and organic products to prepare your meals.</p>
           
        </div>

        <div class="feature">
            <ion-icon class ="feature-icon" name="leaf-outline"></ion-icon>
            <p class="feature-title">
                No Waste
            </p>
            <p class="feature-text">  All our partners only use reusable containers to package all your meals.</p>
            
        </div>
        <div class="feature">
            <ion-icon class ="feature-icon" name="pause-outline"></ion-icon>
            <p class="feature-title">
                Pause anytime!
            </p>
            <p class="feature-text">Going on vacation? Just pause your subscription, and we refund unused days.</p>
            
        </div>
        </div>
        
    </div>

 </section>

 <section class="section-cta" id="tryforfree">
     <div class="container">
         <div class="cta">
            <div class="cta-text-box">
                <div class="heading-secondary">
                    We offer a free sample meal
                </div>
                <p class="cta-text">
                    Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
                </p>
                <form action="" class="cta-form" autocomplete="off">
                    <div>
                        <label for="fullname">Full Name</label>
                        <input id = "fullname" type="text" placeholder="John Smith" required/>
                    </div>
                    <div>
                        <label for="email">Email Address</label>
                        <input id = "email" type="email" placeholder="me@example.com" required/>
                    </div>
                        
                   
                   <div>
                    <label for="select-where">Where did you hear about us?</label>
                    <select name="" id="select-where">
                        <option value="">-Select one-</option>
                        <option value="friends">Friends and Family</option>
                        <option value="youtube">Youtube Video</option>
                    </select>
                   </div>
                    
                  
                    <button class="btn btn-form">Sign up now!</button>
                </form>
            </div>
            <div class="cta-img-box" role ="Image" aria-label = "woman enjoying food"></div>
         </div>
         
     </div>
 </section>
</main>

<footer class="footer">
    <div class="container grid g-5-col">
        <div class="logo-col">
            <a  href="#" class="footer-logo"><img src="img/logos/omnifood-logo.png" alt="Logo" class="logo"></a>
            <ul class="social-links">   
                <li><a class = "footer-link" href="#"><ion-icon class="social-icon" name ="logo-instagram"></ion-icon></a></li>
                <li><a class = "footer-link" href="#"><ion-icon class="social-icon" name ="logo-facebook"></ion-icon></a></li>
                <li><a class = "footer-link" href="#"><ion-icon class="social-icon" name ="logo-twitter"></ion-icon></a></li>
            </ul>
            <p class="copyright">Copyright &copy; 2021 by Omnifood Inc. All rights reserved.</p>

        </div>
        <div class="address-col">
            <p class="footer-heading">Contact us</p>
            <address class="contacts">
                <p> 623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                <a class="footer-link" href="tel:415-201-6370">415-201-6370</a>
                <a class = "footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
             </address>
       </div>
        <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
                <li><a class = "footer-link"href="#">Create Account</a></li>
                <li><a class = "footer-link"href="#">Sign In</a></li>
                <li><a class = "footer-link"href="#">IOS App</a></li>
                <li><a class = "footer-link"href="#">Andriod App</a></li>
            </ul>
        </nav>
        <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
                <li><a class = "footer-link"href="#">For Business</a></li>
                <li><a class = "footer-link"href="#">Cooking Partners</a></li>
                <li><a class = "footer-link"href="#">Careers</a></li>
                <li><a class = "footer-link"href="#">About Omnifood</a></li>
            </ul>
        </nav>

        <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
                <li><a class = "footer-link"href="#">Create Account</a></li>
                <li><a class = "footer-link"href="#">Sign In</a></li>
                <li><a class = "footer-link"href="#">IOS App</a></li>
                <li><a class = "footer-link"href="#">Andriod App</a></li>
            </ul>
        </nav>
       
    </div>
</footer>


`; 

// Make mobile nav work

const btn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btn.addEventListener('click',()=>{
    header.classList.toggle("nav-open");
})

/*Smooth Scrolling */

const alllinks = document.querySelectorAll('a:link');
alllinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const href = link.getAttribute("href");
        


        //Scroll to the top
        if(href === '#')
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        if(href !== "#" && href.startsWith("#"))
        {
            const sectionEL = document.querySelector(href);
            sectionEL.scrollIntoView({behavior: "smooth"});
        }

        //Hide nav menu after link is clicked
        if(link.classList.contains("main-nav-link"))
        header.classList.toggle("nav-open");
    }); 
});

//Stick Nav 

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    if(!ent.isIntersecting)
    {
        document.body.classList.add("sticky");
    }

    if(ent.isIntersecting)
    {
        document.body.classList.remove("sticky");
    }
    
},{
    root:null,
    threshold: 0,
    rootMargin: '-80px'
});
observer.observe(sectionHeroEl);


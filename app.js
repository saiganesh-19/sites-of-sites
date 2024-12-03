const express=require("express");
const app=express();
const path=require("path");
const port=5820;
const engine=require("ejs-mate");
app.engine('ejs',engine);

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));



const data=[
    {
        id:1,
        name:'movies',
        info:'A collectionsof movies Websites',
        img:"https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1",
        website:[{
            name:"movierulz",
            img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            link:"https://www.5movierulz.io/",
        },
        {
            name:"ibomma",
            img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            link:"https://www.5movierulz.io/",
        },]
    },
    {
        id:2,
        name:'school websites',
        info:'A collectionsof movies Websites',
        img:"https://gumlet.assettype.com/TNIE%2Fimport%2F2023%2F11%2F10%2Foriginal%2F4_(2).jpg?w=1200&auto=format%2Ccompress&fit=max",
    },
    {
      
        id:3,  
        name:'school websites',
        info:'A collectionsof movies Websites uwqjszhgdvcywdhganxbz',
        img:"https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/10193851/scheme.jpg",
    },
    {
        id:1,
        name:'movies',
        info:'A collectionsof movies Websites',
        img:"https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1",
        website:[{
            name:"movierulz",
            img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            link:"https://www.5movierulz.io/",
        },
        {
            name:"ibomma",
            img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            link:"https://www.5movierulz.io/",
        },]
    },
    {
        id:2,
        name:'school websites',
        info:'A collectionsof movies Websites',
        img:"https://gumlet.assettype.com/TNIE%2Fimport%2F2023%2F11%2F10%2Foriginal%2F4_(2).jpg?w=1200&auto=format%2Ccompress&fit=max",
    },
    {
      
        id:3,  
        name:'school websites',
        info:'A collectionsof movies Websites uwqjszhgdvcywdhganxbz',
        img:"https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/10193851/scheme.jpg",
    },
    {
        id:1,
        name:'movies',
        info:'A collectionsof movies Websites',
        img:"https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1",
        website:[{
            name:"movierulz",
            img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            link:"https://www.5movierulz.io/",
        },
        {
            name:"ibomma",
            img:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            link:"https://www.5movierulz.io/",
        },]
    },
    {
        id:2,
        name:'school websites',
        info:'A collectionsof movies Websites',
        img:"https://gumlet.assettype.com/TNIE%2Fimport%2F2023%2F11%2F10%2Foriginal%2F4_(2).jpg?w=1200&auto=format%2Ccompress&fit=max",
    },
    {
      
        id:3,  
        name:'school websites',
        info:'A collectionsof movies Websites uwqjszhgdvcywdhganxbz',
        img:"https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/10193851/scheme.jpg",
    },
];

app.get("/home",(req,res)=>{
    res.render("index.ejs",{data});
})

app.get("/home/:id", (req, res) => {
    // Retrieve the 'id' from the URL parameter
    const id = req.params.id;

    // Find the specific data item based on the ID
    const websiteData = data.find(item => item.id == id);

    // If the website data is found, render it, else show an error
    if (websiteData) {
        res.render("show.ejs", { websiteData }); // Pass the found data to the template
        console.log(websiteData);
    } else {
        res.status(404).send("Website not found");
    }

    console.log(id); // Log the ID to the console for debugging
});

app.listen(port,()=>{
    console.log(`port:${port} is listening`);
})
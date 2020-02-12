const path = require(`path`);

    const makeRequest = (graphql, request ) => new Promise((resolve, reject) =>{
        // Query for node to use creating pages 
        resolve (
            graphql(request).then(result =>{
                if(result.errors){
                    reject(result.errors)
                }
                return result
            })
        )
    });
    // inplement the gatsby API createPage. this is called once the
    // data layer is bootstrapped to let plugins create pages from data 

    exports.createPages = ({ actions, graphql})=>{
        const {createPage} = actions;

        // create pages for each blog
        const getBlog = makeRequest(graphql,`
        {
            allContentfulBlog (sort: {fields: createdAt, order: DESC}
                filter:{ node_locale:{eq:"en-US"}},) 
                {
            edges {
                node {
                slug
                title
                id
                }
            }
            }
        }
        
    `).then(result => {
        result.data.allContentfulBlog.edges.forEach(({node}) => {
            createPage({
                path: `blog/${node.slug}`,
                component: path.resolve('src/templates/blog.js'),
                context: {
                    id:node.id,
                },
            })
        })
    });

    // create archive page for all blog including pagenation
    const getArchive = makeRequest(graphql,`
    {
        allContentfulBlog (sort: {fields: createdAt, order: DESC}
            filter:{ node_locale:{eq:"en-US"}},) 
            {
        edges {
            node {
            slug
            title
            id
            }
        }
        }
    }
    
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 9;
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({length :  numPages}).forEach((_, i ) => {
            createPage({
                path: i === 0 ? `/blog/all` : `/blog/all/${i + 1}`,
                component: path.resolve("./src/templates/archive.js"),
                context: {
                    limit:blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage : i + 1 
                }
            })
        })
    }); 


    // create travel category page including pagenation
    const getTravel = makeRequest(graphql,`
    {
        allContentfulBlog (sort: {fields: createdAt, order: DESC}
            filter:{ node_locale:{eq:"en-US"}
            category: {elemMatch: {title:{eq : "Travel"}}} 
        },) 
            {
        edges {
            node {
            slug
            title
            id
            }
        }
        }
    }

    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 9;
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({length :  numPages}).forEach((_, i ) => {
            createPage({
                path: i === 0 ? `/category/travel` : `/category/travel/${i + 1}`,
                component: path.resolve("./src/templates/travel.js"),
                context: {
                    limit:blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage : i + 1 
                }
            })
        })
    }); 
// create guide category page including pagenation
    const getGuide = makeRequest(graphql,`
    {
        allContentfulBlog (sort: {fields: createdAt, order: DESC}
            filter:{ node_locale:{eq:"en-US"}
            category: {elemMatch: {title:{eq : "Guide"}}} 
        },) 
            {
        edges {
            node {
            slug
            title
            id
            }
        }
        }
    }

    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 9;
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({length :  numPages}).forEach((_, i ) => {
            createPage({
                path: i === 0 ? `/category/guide` : `/category/guide/${i + 1}`,
                component: path.resolve("./src/templates/Guide.js"),
                context: {
                    limit:blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage : i + 1 
                }
            })
        })
    });
    
    // create Opinion category page including pagenation
    const getOpinion = makeRequest(graphql,`
    {
        allContentfulBlog (sort: {fields: createdAt, order: DESC}
            filter:{ node_locale:{eq:"en-US"}
            category: {elemMatch: {title:{eq : "Opinion"}}} 
        },) 
            {
        edges {
            node {
            slug
            title
            id
            }
        }
        }
    }

    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 9;
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({length :  numPages}).forEach((_, i ) => {
            createPage({
                path: i === 0 ? `/category/opinion` : `/category/opinion/${i + 1}`,
                component: path.resolve("./src/templates/Opinion.js"),
                context: {
                    limit:blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage : i + 1 
                }
            })
        })
    }); 

     // create Tech category page including pagenation
     const getTech = makeRequest(graphql,`
     {
         allContentfulBlog (sort: {fields: createdAt, order: DESC}
             filter:{ node_locale:{eq:"en-US"}
             category: {elemMatch: {title:{eq : "Tech"}}} 
         },) 
             {
         edges {
             node {
             slug
             title
             id
             }
         }
         }
     }
 
     `).then(result => {
         const blogs = result.data.allContentfulBlog.edges
         const blogsPerPage = 9;
         const numPages = Math.ceil(blogs.length / blogsPerPage)
         
         Array.from({length :  numPages}).forEach((_, i ) => {
             createPage({
                 path: i === 0 ? `/category/tech` : `/category/tech/${i + 1}`,
                 component: path.resolve("./src/templates/Tech.js"),
                 context: {
                     limit:blogsPerPage,
                     skip: i * blogsPerPage,
                     numPages,
                     currentPage : i + 1 
                 }
             })
         })
     }); 

    return Promise.all([
        getBlog,
        getArchive,
        getTravel,
        getGuide,
        getOpinion,
        getTech
    ])
    };



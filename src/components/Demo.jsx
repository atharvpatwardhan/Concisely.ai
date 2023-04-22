import React from 'react'
import { useState, useEffect } from 'react'
import { useLazyGetSummaryQuery } from '../services/article'; 
import BeatLoader from "react-spinners/BeatLoader";



const Demo = () => {

    const [article,setArticle] = useState({
        url : "",
        summary : "",
    });

    const [allArticles, setAllArticles] = useState([]);


    const [getSummary,{error,isFetching}] = useLazyGetSummaryQuery();

    useEffect(()=>{
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem('articles')
        )

        if(articlesFromLocalStorage){
            setAllArticles(articlesFromLocalStorage)
        }

    },[]);

    const handleSubmit = async(e) => {

        e.preventDefault();


        const {data} = await getSummary({articleUrl : article.url});

        if(data?.summary){
            const newArticle = {...article,summary:data.summary};
            
            const updatedAllArticles = [newArticle,...allArticles];
            setArticle(newArticle);
            setAllArticles(updatedAllArticles)
            
            localStorage.setItem('articles',JSON.stringify(updatedAllArticles))
            
            console.log(newArticle);
        }
    }


  return (
    <div id='#summary' className='text-center w-full h-full' style={{"marginTop":"10%","height":"auto"}}>
        <div className='flex'>

        <div className='flex flex-col  shadow-2xl rounded-3xl' style={{"width":"45%","marginLeft":"5%"}}>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className='text-xl mt-5'>Enter a URL </label>
                    <input className='rounded mt-12 my-8 mx-8 shadow-md bg-transparent' value={article.url} onChange={(e)=>setArticle({...article,url:e.target.value})} type='url' required style={{"width":"90%"}}  />
                <button className='text-transparent text-xl font-semibold mt-10 bg-clip-text  ring-slate-500 ring-1 bg-gradient-to-br from-pink-600 to-blue-500' type='submit' style={{"width":"60%","marginLeft":"20%"}}>Summarize</button>
                </div>
            </form>
        </div>


        <div className='shadow-2xl rounded-3xl' style={{"width":"45%","marginLeft":"1%"}}>
            <h2 className='text-xl my-5' style={{"marginRight":"5%"}}>History</h2>
                    {allArticles.map((item,index)=>(
                        <div className='my-1 text-blue-400 overflow-hidden h-10 text-left' key={`link-${index}`} onClick={()=>setArticle(item)} style={{"marginLeft":"2%"}}>
                            <div className='my-3'>
                            {item.url}
                            </div>
                        </div>
                    ))}
        </div>


        </div>


        <div>
            {isFetching?(
                <div style={{"marginTop":"10%"}}>
                    <h1>Reading between the lines ;)</h1>
                    <br />
                    <BeatLoader color="#529ce2"/>
                </div>
                
            ):error?(
                <p style={{"marginTop":"10%"}}>Something went wrong...Please try again later.</p>
            ):(article.summary&&(
                <div className='shadow-2xl' style={{"width":"91%","marginLeft":"5%"}}>
                    <div className='mt-20'>
                        <br/>
                        <h2 className='text-4xl font-semibold font-sans bg-gradient-to-br from-pink-600 to-blue-500 bg-clip-text text-transparent'>Article Summary</h2>
                    </div>
                    <br />
                    <div className='' style={{"width":"80%","marginLeft":"10%"}}>
                        <p className='text-2xl my-5 text-justify'>{article.summary}</p>
                        <br />
                    </div>
                </div>
            ))}
        </div>



    </div>
  )
}

export default Demo
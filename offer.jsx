
import styles from "./offer.module.css"
function Counter({ count, countChange, index ,limit,price}) { // Receive count as a prop
    function decrease() {
        if(count!=0)
      countChange(count - 1, index); // Use the received count value
    }
    function increase() {
        if(limit*price-price>=0)
      countChange(count + 1, index);
    }
    function Buttonneg()
    {
        if(count!=0)
            return(<button className=" text-3xl p-4 pl-4 pr-4 bg-red-400 text-center hover:duration-500 hover:bg-red-500" onClick={decrease}>-</button>)
        else
        return(<button className=" text-3xl p-4 pl-4 pr-4 bg-slate-400 text-center" >-</button>)

    }
    function Buttonpos()
    {
        if(limit*price-price>=0)
            return(<button className=" text-3xl p-4 pl-4 pr-4 bg-green-400 text-center hover:duration-500 hover:bg-green-500" onClick={increase}>+</button>)
        else
        return(<button className=" text-3xl p-4 pl-4 pr-4 bg-slate-400 text-center">+</button>)

    }
    return(
        <>
            <div className="text-white border-white border-2 w-full h-full flex flex-row text-center items-center">
                <Buttonneg />
                    <p className = "w-full text-3xl money">{count}</p>
                <Buttonpos />
                            </div>
        </>
    )
}
export default function Offer({name="Twitter",price = 0,image = "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",limit,countChange,index,count})
{
    let x = {
        name: "X",
        image: "https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png"
    }
    if(count>=1 && index==26)
        {
            name = x.name;
            image = x.image;
        }

    return(
        <>
        <div className = "setup w-[400px] border-t-8 mt-20 p-4 bg-zinc-950 rounded-md h-[350px] m-5 flex flex-col items-center">
            <div>
            <img src={image} className="h-[200px] bg-zinc-950"/>

            </div>
            <div className="text-center h-[100px] flex flex-col text-white w-full bg-zinc-950">
                <h1 className="name text-2xl pb-2 text-left p-2 bg-zinc-950">{name}</h1>
                <p className="money text-xl mb-2 text-right w-full p-2 bg-zinc-950">${price}</p>
                </div>
            <Counter 
            count = {count}
            countChange={countChange}
            index = {index}
            limit = {limit}
            price = {price}
            />
        </div>
        </>
    )
}
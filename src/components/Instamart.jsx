import { useState } from "react";

const Section = (props)=>{
    return(
        <div className="p-2 m-2 border border-black">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {props.isVisible ? <button onClick={()=>props.setIsVisible(false)}>Hide</button> :
        <button onClick={()=>props.setIsVisible(true)}>Show</button> }
        {props.isVisible && <p>{props.description}</p>}
        </div>
    )
}


const Instamart = ()=>{
    const [config, setConfig] = useState({
        about: false,
        contact: false,
        career: false
    });
    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-2 border border-black">Instamart</h1>
            <Section 
                title="About"
                description="It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
                English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                isVisible = {config.about}
                setIsVisible={(e)=>setConfig({
                    about: e,
                    contact:false,
                    career:false
                })}
            />
            <Section 
                title="Contact"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
                of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This 
                book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of 
                Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
                isVisible = {config.contact}
                setIsVisible={(e)=>setConfig({
                    about: false,
                    contact:e,
                    career:false
                })}
            />
            <Section 
                title="Career"
                description="It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
                English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                isVisible = {config.career}
                setIsVisible={(e)=>setConfig({
                    about: false,
                    contact:false,
                    career:e
                })}
            />
        </div>
    );
}
export default Instamart;
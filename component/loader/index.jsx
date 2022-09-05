import { useState} from "react"
import ClipLoader from "react-spinners/ClipLoader";


export const Loader = ({loading,loadingOnModal})=>{

    
    let [color, setColor] = useState("#ffffff");

    const override = {
        background : 'transparent',
        position : 'absolute',
        left : '50%',
        top : '50%',
        zIndex : '1000'
    }
    return (
            <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
    )
}

export const ModalLoader = ({loadingOnModal,action})=>{

    
    let [color, setColor] = useState("#ffffff");

    const override = {
        background : 'transparent',
        position : 'absolute',
        left : '50%',
        top : '80%',
        
    }
    const container = {
        background : '#00000088',
        display : loadingOnModal ? 'flex' : 'none', 
        position:'absolute',
        zIndex : 100,
        flexDirection : 'column',
        width : '100%',
        height : action === 'uploading' ? '330px' : '220px',
        alignItems : 'center',
        justifyContent : 'center'
    }


    return (
        <div style={container}>
            <ClipLoader color={color} loading={loadingOnModal} cssOverride={{}} size={150} />
            <p style={{fontSize:'22px',letterSpacing:2,marginTop:'28px'}}>{action.toUpperCase()} ...</p>
       </div>
    )
}

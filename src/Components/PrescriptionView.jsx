export const Preview = ({file}) =>{
    if(!file.length) {
        return null
    };
    return file.map((file) => <img src={file.filename} alt={file.originalname}/>)
}
module.exports =  (req) =>{
   return new Promise((resolve,reject)=>{
    const chunkData =  [];
    req.on('data', (chunk)=>{
      chunkData.push(chunk);
    })
    req.on('end', async()=>{
      const data  = chunkData.toString();
      const formData = JSON.parse(data);
      resolve(formData)
    })
    })

}
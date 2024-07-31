const getAllUsers=async(req,res)=>{
    try{
        await userService.getAllUsers(req,res);
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err
        });
    }
}

const getUserById=async(req,res)=>{
    try{
        await userService.getUserById(req,res);
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err
        });
    }
}

const addUser=async(req,res)=>{
    try{
        await userService.addUser(req,res);
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err
        });
    }
}

const updateUser=async(req,res)=>{
    try{
        await userService.updateUser(req,res);
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err
        });
    }
}

const deleteUser=async(req,res)=>{
    try{
        await userService.deleteUser(req,res);
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err
        });
    }
}

module.exports={getAllUsers,getUserById,addUser,updateUser,deleteUser};
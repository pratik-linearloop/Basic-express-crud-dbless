let users=[];

const addUser = async (req, res) => {
    const newUser = req.body;
    const existingUser = users.find(user => user.id === newUser.id);
    if (existingUser) {
        return res.status(400).json({
            status: "failed",
            message: "User already exists"
        });
    }
    users.push(newUser);
    res.status(201).json({
        status: "success",
        data: newUser
    });
}

const getAllUsers=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:users
    });
}

const getUserById=async(req,res)=>{
    const {id}=req.params;
    const user=users.find(user=>user.id===id);
    if(!user){
        return res.status(404).json({
            status:"failed",
            message:"User not found"
        });
    }
    res.status(200).json({
        status:"success",
        data:user
    });
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({
            status: "failed",
            message: "User not found"
        });
    }
    users[userIndex] = { ...users[userIndex], name, age };
    res.status(200).json({
        status: "success",
        data: users[userIndex]
    });
}

const deleteUser=async(req,res)=>{
    const {id}=req.params;
    users=users.filter(user=>user.id!==id);
    res.status(204).json({
        status:"success",
        data:null
    });
}

module.exports={getAllUsers,getUserById,addUser,updateUser,deleteUser};
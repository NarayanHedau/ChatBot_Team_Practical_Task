let router = require("express").Router();
let response = require("../../helper/response");
const mongoose = require("mongoose");
const User = mongoose.model("User");

//  Create an API for add user
router.post("/add", async (req, res) => {
  try {
    const addUser = await User(req.body).save()
    if (addUser) {
      return response.successResponse(res, 200, "User registerd successfully", addUser)
    } else {
      return response.errorMsgResponse(res, 400, "Internal Server Error")
    }
  } catch (error) {
    console.log(error)
    response.errorMsgResponse(res, 500, "Internal Server Error")
  }
})
//  Create an API for get all users
router.get("/getAll", async(req, res)=>{
  try {
    const getAllUsers = await User.find()
    if (getAllUsers) {
      return response.successResponse(res, 200, "Users has been fetched successfully", getAllUsers)
    } else {
      return response.errorMsgResponse(res, 400, "Internal Server Error")
    }
  } catch (error) {
    console.log(error)
    response.errorMsgResponse(res, 500, "Internal Server Error")
  }
})

//  Create an API for get one user
router.get("/get/:id", async(req, res)=>{
  try {
    const getUser = await User.find({_id: req.params.id})
    if (getUser) {
      return response.successResponse(res, 200, "User has been fetched successfully", getUser)
    } else {
      return response.errorMsgResponse(res, 400, "Internal Server Error")
    }
  } catch (error) {
    console.log(error)
    response.errorMsgResponse(res, 500, "Internal Server Error")
  }
})

//  Create an API for update user
router.put("/update/:id", async(req, res)=>{
  try {
    const updateUser = await User.findByIdAndUpdate({_id:req.params.id}, {$set:req.body}, {new:true})
    if (updateUser) {
      const getUser = await User.find({_id: req.params.id})
      return response.successResponse(res, 200, "User has been updated successfully", getUser)
    } else {
      return response.errorMsgResponse(res, 400, "Internal Server Error")
    }
  } catch (error) {
    console.log(error)
    response.errorMsgResponse(res, 500, "Internal Server Error")
  }
})

//  Create an API for delete user (soft delete)
router.delete("/softDelete/:id", async(req, res)=>{
  try {
    const deleteUser = await User.findByIdAndUpdate({_id:req.params.id}, {$set:{status: "Deleted"}}, {new:true})
    if (deleteUser) {
      return response.successResponse(res, 200, "User has been Deleted successfully")
    } else {
      return response.errorMsgResponse(res, 400, "Internal Server Error")
    }
  } catch (error) {
    console.log(error)
    response.errorMsgResponse(res, 500, "Internal Server Error")
  }
})

//  Create an API for delete user (soft delete)
router.delete("/delete/:id", async(req, res)=>{
  try {
    const deleteUser = await User.findByIdAndDelete({_id:req.params.id})
      return response.successResponse(res, 200, "User has been Deleted successfully")
  } catch (error) {
    console.log(error)
    response.errorMsgResponse(res, 500, "Internal Server Error")
  }
})
module.exports = router;

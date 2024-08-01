// const Tour = require('../controllers/userController')
const Tour = require('../models/tourModels');

exports.getAllTour = async (req, res) => {
  try {

    
    
    // const tours = await Tour.find().where('duration').equals(5).where('difficulty').equals('easy')
    const queryObj = {...req.query};
    const excludedFields = ['page','limit','sort','fields'];
    excludedFields.forEach(el => delete queryObj[el])
    
    
    
    
    let querystr = JSON.stringify(queryObj)
    querystr = querystr.replace(/\b(gte|lt|lte|gt)\b/g, match => `$${match}`)
    let query = Tour.find(JSON.parse(querystr))
    
    //Sorting
    if(req.query.sort){
      const sortBy = req.query.sort.split(',').join(' ')
      console.log(sortBy);
      query = query.sort(sortBy)
    }else{
      query = query.sort('-createdAt')
    }
    
    
    const tours = await query;
    res.status(200).json({
      message: 'success',
      result: tours.length,
      tours: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    console.log(tour);
    res.status(200).json({
      message: 'success',
      tours: tour,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed',
      tours: error
    });
  }
};

exports.AddTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      message: error,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
        message : "data updated ....",
        tour
    })
  } catch (error) {
    res.status(400).json({
        status: 'Failed',
        message: error,
      });
  }
};

exports.deleteTour = async(req, res) => {
 try {
    const tour = await Tour.findByIdAndDelete(req.params.id)
     res.status(200).json({
         message : "success",
         tours : tour
     })
 } catch (error) {
    res.status(400).json({
        status: 'Failed',
        message: error,
      });
 }
};

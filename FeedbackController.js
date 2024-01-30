const FeedbackModel = require('./FeedbackModel');

module.exports.getFeedback = async(req, res) => {
    const myFeedback = await FeedbackModel.find()
    res.send(myFeedback)
}

module.exports.saveFeedback = async(req, res) => {
    const {title} = req.body
    FeedbackModel.create({title})
    .then((data) => {
    console.log('Feedback added')
    res.send(data)
})
}
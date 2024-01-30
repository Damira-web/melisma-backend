const {Router} = require('express');
const { getFeedback, saveFeedback } = require('./FeedbackController')

const router = Router();

router.get('/', getFeedback);
router.post('/saveFeedback', saveFeedback);

module.exports = router;
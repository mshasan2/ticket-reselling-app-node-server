import * as reviewsDao from './reviews-dao.js';

const createReview = async (req, res) => {
    const newReview = await reviewsDao.createReview(req.body);
    res.json(newReview);
}

const findAllReviews = async (req, res) => {
    const reviews = await reviewsDao.findAllReviews();
    res.json(reviews);
}

const findReviewByEventId = async (req, res) => {
    const eventId = req.params['eventId'];
    console.log(eventId)
    const reviewRet = await reviewsDao.findReviewsByEventId(eventId);
    res.json(reviewRet);
}


const findReviewById = async (req, res) => {
    const eventId = req.params['eventId']
    const event = await reviewsDao.findEventById(eventId)
    res.json(event)
}


const findReviewsByUserId = async (req, res) => {
    const userId = req.params['userId'];
    const reviews = await reviewsDao.findReviewsByUserId(userId);
    res.json(reviews);
}

const updateReview = async (req, res) => {
    const reviewId = req.params['reviewId'];
    const review = req.body;
    const status = await reviewsDao.updateReview(reviewId, review);
    if (status.modifiedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

const deleteReview = async (req, res) => {
    const reviewId = req.params['reviewId'];
    const status = await reviewsDao.deleteReview(reviewId);
    if (status.deletedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

export default (app) => {
    app.post('/api/reviews', createReview);
    app.get('/api/reviews', findAllReviews);
    app.get('/api/reviews/review/:reviewId', findReviewById);
    app.get('/api/reviews/events/:eventId', findReviewByEventId);
    app.get('/api/reviews/users/:userId', findReviewsByUserId);
    app.put('/api/reviews/:reviewId', updateReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
}


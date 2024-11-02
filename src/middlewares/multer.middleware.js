import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/temp');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname + '-' + new Date().toISOString());
    },
});

export const upload = multer({
    storage,
});

import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/coffees'); 
    },
    filename: (req, file, cb) => {
        const reference = req.body.reference; 
        cb(null, `${reference}.png`); 
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error('Seules les images PNG ou JPG sont autorisées.'));
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 } 
});

export default upload;
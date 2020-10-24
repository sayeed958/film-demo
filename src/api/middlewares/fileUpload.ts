import * as path from "path";
import * as uuid from 'uuid';
import multer, {diskStorage} from 'multer'

const UPLOAD_PATH = path.join(__dirname, '../../../', 'uploads/');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});
export default upload;
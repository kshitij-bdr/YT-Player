import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
    if (!localFilePath) return null;
    try {
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally stored file as upload to cloudinary failed
        return null;
    }
};

export { uploadToCloudinary };

import express from "express";
import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
import cors from "cors"

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:4200' //replace with your domain or specific front-end origin
}));

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
    secure: true
})

const publicId = 'samples/finn_website_test/landingPage/clients_logo/sxncjgp5ghfy89ecz1ro';

/*

cloudinary.api.update(
    publicId, {
        resource_type: 'image',
        type: 'upload',
        context: 'description=Your image description' // Add your description here
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })

 */



app.get("/api/landingVideo", async (req, res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/video/*";

        const result = await cloudinary.search
        .expression('folder:' + folderPath).sort_by('public_id','desc').execute();
        const elements = result.resources;

        res.json(elements[0])

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving video' });
    }
})

app.get("/api/clientLogos", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/clients_logo/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;
        res.json(elements);
    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})

app.get("/api/contactsImage", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/contacts/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();
        const elements = result.resources;

        res.json(elements[0])

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})

app.get("/api/showReelLanding", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/showreel_works/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})

app.get("/api/worksLanding", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/showreel_works/works/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})

app.get("/api/videoThumb", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/video_thumb/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})

app.get("/api/aboutProfileImage", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/aboutPage/profilePicture/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})

app.get("/api/aboutInActionsImages", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/aboutPage/inActionImages/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})


//TODO FIX THE FOLLOWING AND MAKE IT RETURN THE RIGHT DATA STRUCTURE
app.get("/api/works/videography", async (req, res) => {
    try {
        const folderPath = "samples/finn_website_test/worksPage/Videography/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath)
            .sort_by('public_id', 'desc')
            .execute();

        const elements = result.resources;

        const baseFolder = 'samples/finn_website_test/worksPage/Videography/';
        const folders = {};

        // Function that organizes folders and their content
        elements.forEach(element => {
            const subFolders = element.folder.replace(baseFolder, '').split('/');
            let currentPath = '';
            let currentWorkName = '';
            subFolders.forEach(subFolder => {
                if (subFolder !== '') {
                    currentPath = currentPath ? `${currentPath}/${subFolder}` : subFolder;
                    currentWorkName = currentWorkName ? `${currentWorkName}/${subFolder}` : subFolder;
                    if (!folders[currentPath]) {
                        folders[currentPath] = { work_name: currentWorkName, content: [] };
                    }
                }
            });

            // Check if the current element is in the "Thumbnail" folder
            if (element.public_id.includes('/Thumbnail/')) {
                // Add the current element to the 'content' array of the parent folder
                const parentFolder = currentPath.split('/Thumbnail/')[0];
                if (!folders[parentFolder].content.find(item => item.public_id === element.public_id)) {
                    folders[parentFolder].content.push(element);
                }
            }
        });

        // If you want an array of these objects instead of a map:
        const works = Object.values(folders);

        console.log(works);
        res.json(works);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error in retrieving works' });
    }
});


/*
app.get("/api/works/photography", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/clients_logo/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;
        res.json(elements);
    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})

 */


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})
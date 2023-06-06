// created a database just with sanity
// set everything up
export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                // when your using software look through documentation
                // user will be able to choose the crop while uploading image
                hotspot: true
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },

    ]
}
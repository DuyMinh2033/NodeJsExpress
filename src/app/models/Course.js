const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  slug = require('mongoose-slug-updater');
mongoose.plugin(slug);


const CourseSchema = new Schema({
  name: String,
  description: String,
  img:String,
  videoId: String,
  slug:{type: String, slug: 'name', unique:true}
},{ timestamps: true});

module.exports = mongoose.model('Course', CourseSchema);
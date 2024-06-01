const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete')




const CourseSchema = new Schema({
  name: String,
  description: String,
  img: String,
  videoId: String,
  slug: { type: String, slug: 'name', unique: true }
}, { timestamps: true });

//ad plugin 
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
})

module.exports = mongoose.model('Course', CourseSchema);
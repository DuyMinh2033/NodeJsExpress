const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CourseSchema = new Schema({
  _id :{type : Number},
  name: String,
  description: String,
  img: String,
  videoId: String,
  slug: { type: String, slug: 'name', unique: true }
}, {
  _id:false,
  timestamps: true 
});

//ad plugin 
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement) // cam AutoIncrement update _id tu dong tang

CourseSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
})

module.exports = mongoose.model('Course', CourseSchema);
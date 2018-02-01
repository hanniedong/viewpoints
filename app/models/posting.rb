class Posting < ApplicationRecord
  # belongs_to :poster, class_name: :User, foreign_key: :user_id
  has_many :favorites
  has_attached_file \
    :photo,
    styles: { medium: '300x300>' },
    convert_options: {
      all: '-interlace Plane'
    },
    default_url: '/images/default_:style_photo.png'

  scope :by_longitude, -> (min, max) { min && max ? where('longitude >= :min AND longitude <= :max', min: min, max: max) : all }
  scope :by_latitude, -> (min, max) { min && max ? where('latitude >= :min AND latitude <= :max', min: min, max: max) : all }
 
  API_RESULTS_LIMIT = 100
 
  def self.search(min_lat:, max_lat:, min_lng:, max_lng:)
    by_latitude(min_lat.to_f, max_lat.to_f).
    by_longitude(min_lng.to_f, max_lng.to_f).
    limit(API_RESULTS_LIMIT)
  end


end
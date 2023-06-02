require 'net/http'
require 'json'

class PagesController < ApplicationController
  def home
    url = 'http://localhost:8080/pokemon-1500.json'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    @arrayData = JSON.parse(response)
  end
end

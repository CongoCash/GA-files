require('open-uri')
namespace :title_scrape do
  desc "TODO"
  task scrape: :environment do
    doc = Nokogiri::HTML(open("http://www.reddit.com/"))
    doc.css('.title.may-blank').each do |title|
      Reddit.create(title:title.text)
    end

  end

end

module PortfolioHelper

  
  def add_skill(skill, note, link)
 
    raise "ArgumentError", 'Argument is higher than 6' unless note <= 6
    raise "ArgumentError", "Argument is not string" unless skill.is_a? String
    stars = star_note(note)


    return "<h2 align=\"left\" style=\"color: white\">#{stars} <span id=\"tools\"><a href=\"#{link}\">#{skill} </a></span></h2>"

  end



  def star_note(note)
  
    max_note = 6
	  
	  # full_stars
	  fs = note.to_i

	  # half_stars
	  hs = 0
	  
	  if note != fs
      hs = 1
	  end

    # empty_stars
	  es = 6 - fs - hs
    
    # stars pattern
    starts = full_star(fs) + half_star(hs) + empty_star(es)	  

  end


  def full_star(count)
    '<i class="fa fa-star"></i> ' * count
  end

  def half_star(count)
    '<i class="fa fa-star-half-o"></i> ' * count
  end

  def empty_star(count)

  	'<i class="fa fa-star-o"></i> ' * count
  end

end

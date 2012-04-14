#!/usr/bin/env ruby

Dir.foreach('.') do |f|
  if File.extname(f) == ".png"
    system "pngquant-mac #{f}"
  end
end

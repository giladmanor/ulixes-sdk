require 'net/http'

class LoadTest
  SERVER = "http://localhost:3000/api/set/"
  ACCOUNT_NUMBER = 3
  ACCOUNT_KEY = "PcD18LoSxnhx7HetBUCi5CMRm8UwdeeA6oa1UrmkG1hhHKOZDG"

  def self.set(uuid, code, value)
    send({:uuid=>uid, :code=>ACTIONS.shuffle.first, :value=>VALUES.shuffle.first})
  end
  
  def self.get(uuid)
    send({:uuid=>uid, :code=>ACTIONS.shuffle.first, :value=>VALUES.shuffle.first})
  end
  
  def self.create(uuid,data)
    send({:uuid=>uid, :code=>ACTIONS.shuffle.first, :value=>VALUES.shuffle.first})
  end
  
  def self.get_token(uuid)
    send({:uuid=>uid, :code=>ACTIONS.shuffle.first, :value=>VALUES.shuffle.first})
  end
  
  def self.send(args)
    args.merge!({
      #:with_info=>true,
      :a_id=>ACCOUNT_NUMBER,
      :k=>ACCOUNT_KEY
    })

    uri = URI.parse(SERVER)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'
    response = Net::HTTP.post_form(uri, args)
  end

end
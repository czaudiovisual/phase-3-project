class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    #GET /movies (index action)
    if req.path.match(/movies/) && req.get?
      movies = Movie.all
      return [200, { 'Content-Type' => 'application/json' }, [ movies.to_json ]]

      #GET /theaters (index action)
    if req.path.match(/theaters/) && req.get?
      theaters = theater.all
      return [200, { 'Content-Type' => 'application/json' }, [ theater.to_json ]]
      
      # POST /movies (create action)
    elsif req.path.match(/movies/) && req.post?
      data = JSON.parse req.body.read
      puts data
      movie = Movie.create(data)
      movie.save
      return [200, { 'Content-Type' => 'application/json' }, [ movie.to_json ]]
     
      # DELETE /movies (destroy action)
    elsif req.delete?
      id = req.path_info.split('/movies/').last
      movie = Movie.find_by_id(id)
      movie.delete
      return [200, { 'Content-Type' => 'application/json' }, [ { message: 'Movie deleted'}.to_json ]]
   
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end
end

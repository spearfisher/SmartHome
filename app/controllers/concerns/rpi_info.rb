module RpiInfo
  require 'rpi_request'

  def fetch_hardware_info
    url = "http://#{rpi_params[:address]}:#{rpi_params[:port]}"
    rpi = RpiRequest.new(url, '/activation')
    resp = rpi.post_request
    return nil unless resp
    rpi_params.merge! resp
  end

  def connection_test
    rpi = RpiRequest.new(raspberry.url, '/api/test')
    return nil unless rpi.request
    rpi.request['message']
  end
end

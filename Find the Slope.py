def find_slope(points):
    try:
        result = (points[3]-points[1])//(points[2]-points[0])
        return str(result)
    except:
        return "undefined"

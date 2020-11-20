exports.transformTrefleObjToResponse = ({ id, common_name, scientific_name, image_url, links}) => {
    return {
        trefleId: id,
        commonName: common_name,
        scientificName: scientific_name,
        trefleImageUrl: image_url,
        // links,
    }
}
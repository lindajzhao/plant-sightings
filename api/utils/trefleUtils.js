exports.transformTrefleObjToResponse = ({ id, common_name, scientific_name, image_url, family_common_name, genus, family}) => {
    return {
        trefleId: id,
        commonName: common_name,
        scientificName: scientific_name,
        trefleImageUrl: image_url,
        familyCommonName: family_common_name,
        genus,
        family
    }
}
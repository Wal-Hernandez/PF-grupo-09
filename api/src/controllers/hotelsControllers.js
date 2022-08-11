const { Hotel, City, ReviewHotel,User } = require("../db");

const getHotels = async() => {
    try {
        let allHotels = await Hotel.findAll({
            include: [{
                    model: City,
                    attributes: ["name"],
                },
                {
                    model: ReviewHotel,   include: {
                        model: User,
                      },
                },
            ],
        });

        return allHotels;
    } catch (err) {
        return {
            msg: "Error getHotels(hotelsController.js)",
            error: err,
        };
    }
};

const getHotel = async(id) => {
    try {
        let allHotels = await Hotel.findByPk(id, {
            include: [{
                    model: City,
                    attributes: ["name"],
                },
                { model: ReviewHotel },
            ],
        });

        return allHotels;
    } catch (err) {
        return {
            msg: "Error getHotel(hotelsController.js)",
            error: err,
        };
    }
};
const createHotel = async(
    name,
    location,
    stars,
    phone,
    price,
    pool,
    wifi,
    gym,
    urlImage,
    cityId
) => {
    try {
        if (!name ||
            !location ||
            !stars ||
            !phone ||
            !price ||
            !urlImage ||
            !cityId
        ) {
            return "All fields are required";
        }
        if (typeof name !== "string") {
            return "Only letters are allowed in the name field";
        }
        const hotelCreate = await Hotel.create({
            name,
            location,
            stars,
            phone,
            price,
            pool,
            wifi,
            gym,
            urlImage,
            cityId,
        });

        return "Hotel created successfully";
    } catch (err) {
        return {
            msg: "Error createhotel(hotelController.js)",
            error: err,
        };
    }
};
const deleteHotelById = async(id) => {
    try {
        const deleteHotel = await Hotel.destroy({
            where: { id: id },
        });

        if (deleteHotel) {
            return { msg: "The hotel has been deleted successfully", valor: true };
        }
        return { msg: "Id hotel not found" };
    } catch (error) {
        return {
            msg: "Error deleteHotelById(hotelsController.js)",
            error: error,
        };
    }
};
const enableHotelById = async(
    id,
) => {
    try {
        let hotelEnable = await Hotel.findByPk(id);
        hotelEnable = JSON.parse(JSON.stringify(hotelEnable));
        let enableHotel = hotelEnable.enabled;
        enableHotel = !enableHotel;
        const a = await Hotel.update({
            enabled: enableHotel
        }, { where: { id: id } })
        if (a[0]) {
            return { msg: "The hotel has been updated successfully", valor: true };
        }
        return { msg: "Id hotel not found" };
    } catch (error) {
        return {
            msg: "Error enableHotelById(hotelsController.js)",
            error: error,
        };
    }

}
const updateHotelById = async(
    id,
    name,
    location,
    stars,
    phone,
    price,
    pool,
    wifi,
    gym,
    urlImage,
    cityId
) => {
    try {
        if (!name || !location || !stars || !phone || !price || !urlImage || !cityId) {
            return "All fields are required";
        }
        if (typeof name !== "string") {
            return "Only letters are allowed in the name field";
        }
        const a = await Hotel.update({
            name,
            location,
            stars,
            phone,
            price,
            pool,
            wifi,
            gym,
            urlImage,
            cityId
        }, { where: { id: id } });
        if (a[0]) {
            return { msg: "The hotel has been updated successfully", valor: true };
        }
        return { msg: "Id hotel not found" };
    } catch (error) {
        return {
            msg: "Error updateHotelById(hotelsController.js)",
            error: error,
        };
    }
};

module.exports = {
    getHotels,
    createHotel,
    getHotel,
    deleteHotelById,
    updateHotelById,
    enableHotelById,
};
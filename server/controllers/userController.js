const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["id", "name", "email"] });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAddress = async (req, res) => {
  {
    console.log(req.user)
    const { id } = req.user;
  
    try {
      // Fetch user details including address information
      const user = await User.findByPk(id, {
        attributes: ["name", "email", "phone", "address", "country", "state"],
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        message: "User address fetched successfully",
        data: user,
      });
    } catch (error) {
      console.error("Error fetching user address:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
};


exports.saveAddress = async (req, res) => {
  const { id } = req.user;
  const { phone, address, country, state } = req.body;

  try {
    // Find the user by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update address fields
    user.phone = phone || user.phone; // Keep existing value if not provided
    user.address = address || user.address;
    user.country = country || user.country;
    user.state = state || user.state;

    // Save changes to the database
    await user.save();

    res.status(200).json({
      message: "Address updated successfully",
      data: {
        phone: user.phone,
        address: user.address,
        country: user.country,
        state: user.state,
      },
    });
  } catch (error) {
    console.error("Error updating address:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

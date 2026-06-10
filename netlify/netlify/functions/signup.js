exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Parse the incoming user data from the form
    const { name, email, password } = JSON.parse(event.body);

    if (!name || !email || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "All fields are required." }),
      };
    }

    // SUCCESS CONFIRMATION
    // Note: In production, you would insert code here to save to a database.
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        message: `Success! Account created for ${name}. Welcome to Apex Global Brokers.` 
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error processing registration." }),
    };
  }
};


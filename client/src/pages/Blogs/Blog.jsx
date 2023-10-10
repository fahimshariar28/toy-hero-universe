import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div className=" my-10 p-5">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            Access Token: An access token is a credential that is used to
            authenticate and authorize requests made by a client to a server. It
            is typically issued by an authentication server (such as OAuth
            provider) after a user successfully logs in or grants permission to
            a client application. The access token contains information about
            the user and their permissions, and it is used to access protected
            resources or perform actions on behalf of the user. Refresh Token: A
            refresh token is a long-lived token that is used to obtain a new
            access token when the current access token expires. It is typically
            issued alongside the access token and has a longer expiration time.
            The refresh token is sent to the server to request a new access
            token without requiring the user to re-authenticate. It is important
            to note that access tokens should not be stored in insecure storage
            mechanisms such as plain text files, session storage, or client-side
            databases, as they can be easily compromised. Additionally, always
            consider the specific security requirements of your application and
            follow best practices to protect access and refresh tokens.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL Databases: Relational databases based on the Structured Query
            Language (SQL). Structured data model with predefined schemas and
            fixed tables. Follows ACID (Atomicity, Consistency, Isolation,
            Durability) properties. Suitable for complex data relationships and
            transactions. Support for joins, constraints, and complex queries.
            Examples: MySQL, PostgreSQL, Oracle. NoSQL Databases: Non-relational
            databases that do not use SQL as the primary query language.
            Flexible data model without predefined schemas. Supports
            unstructured, semi-structured, and structured data. Horizontal
            scalability, distributed architecture, and high availability. Types
            include document databases, key-value stores, column-family stores,
            and graph databases. Examples: MongoDB, Cassandra, Redis.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            Express.js: Express.js is a minimal and flexible web application
            framework for Node.js. It provides a robust set of features for
            building web applications and APIs. Express.js is known for its
            simplicity and easy-to-use interface, making it a popular choice for
            developers to quickly create server-side applications. It offers a
            range of functionalities, including routing, middleware support,
            template engines, and HTTP utility methods. Express.js follows the
            middleware approach, where middleware functions can be used to
            handle requests and responses in a modular and reusable way. It also
            integrates well with other Node.js libraries and frameworks,
            allowing developers to build powerful and scalable web applications.
            NestJS: NestJS is a progressive and opinionated Node.js framework
            for building scalable and efficient server-side applications. It is
            built with TypeScript and follows the architecture of Angular,
            making it familiar to developers with Angular background. NestJS
            combines elements of object-oriented programming, functional
            programming, and reactive programming to provide a robust and
            modular structure for developing enterprise-grade applications. It
            emphasizes the use of decorators, dependency injection, and modular
            architecture to enhance code maintainability and reusability. NestJS
            provides features such as powerful routing, dependency injection,
            middleware support, database integration, and built-in support for
            testing. It is designed to work well with TypeScript and leverages
            its static typing capabilities for better code quality and error
            detection. NestJS is suitable for building RESTful APIs,
            microservices, and full-stack applications.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work ?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            MongoDB aggregation framework is a powerful tool used for processing
            and analyzing data within a MongoDB database. It allows you to
            perform complex data operations, such as grouping, filtering,
            sorting, joining, and transforming data, in a flexible and efficient
            manner. The aggregation framework operates on collections of
            documents and processes them through a series of stages. Each stage
            represents a specific data transformation or operation. The output
            of each stage serves as the input for the next stage, forming a
            pipeline of operations. Here is a brief overview of how the MongoDB
            aggregation framework works: Match Stage: Filters documents based on
            specified criteria using conditions similar to query operators.
            Project Stage: Shapes the documents in the pipeline, allowing you to
            include or exclude specific fields, create computed fields, rename
            fields, or reshape the document structure. Group Stage: Groups
            documents together based on a specified key or keys and performs
            aggregation operations, such as sum, count, average, or custom
            operations, on the grouped data. Aggregation Operators: MongoDB
            provides a wide range of aggregation operators, such as $group,
            $match, $project, $sort, $limit, $skip, $lookup, $unwind, and many
            more. These operators are used within the stages to perform specific
            data operations. By combining these stages and operators in a
            pipeline, you can perform complex data manipulations and
            aggregations in a single query. The aggregation framework provides a
            flexible and efficient way to process large volumes of data within
            MongoDB and extract valuable insights. NestJS: NestJS is a
            progressive and opinionated Node.js framework for building scalable
            and efficient server-side applications. It is built with TypeScript
            and follows the architecture of Angular, making it familiar to
            developers with Angular background. NestJS combines elements of
            object-oriented programming, functional programming, and reactive
            programming to provide a robust and modular structure for developing
            enterprise-grade applications. It emphasizes the use of decorators,
            dependency injection, and modular architecture to enhance code
            maintainability and reusability. NestJS provides features such as
            powerful routing, dependency injection, middleware support, database
            integration, and built-in support for testing. It is designed to
            work well with TypeScript and leverages its static typing
            capabilities for better code quality and error detection. NestJS is
            suitable for building RESTful APIs, microservices, and full-stack
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

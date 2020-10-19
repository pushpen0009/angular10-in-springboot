FROM java:8-jdk-alpine
COPY ./target/ephsui-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR /usr/app
RUN sh -c 'touch ephsui-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java","-jar","ephsui-0.0.1-SNAPSHOT.jar"]

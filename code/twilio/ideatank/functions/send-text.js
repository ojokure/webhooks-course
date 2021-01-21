exports.handler = (context, event , callback) => {
    const client = context.getTwilioClient()
    console.log('sending text')

    client.messages.create({
        to: context.PHONE_NUMBER,
        from: context.TWILIO_NUMBER,
        body: `New Idea: ${event.TranscriptionText}`
    }).then(msg => {
        console.log ('message' + msg.id)
        callback(null, `Sent message ${msg.id}`)
    })
    .catch(error => {
        console.error(`Uh Oh: ${error}`)
        callback(error)
    })
}
openssl smime -binary -sign \
  -certfile ./.credentials/wwdr.pem \
  -signer ./.credentials/PassCertificate.pem \
  -inkey ./.credentials/PassKey.pem \
  -in ./passModel/manifest.json \
  -out ./passModel/signature \
  -outform DER
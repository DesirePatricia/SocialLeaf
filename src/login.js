import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'social-leaf.us.auth0.com', clientId: 'XLescsqcFAa3jutIeeFfXQPIYdS39vEf' });

login = () => {
auth0
    .webAuth
    .authorize({scope: 'openid profile email'})
    .then(credentials =>
      this.setState({ accessToken: credentials.accessToken }),
      this.goToHome(data)
    )
    .catch(error => console.log(error));
    }

goToHome = data => {
    this.setState({
        hasInitialized: true
      });

      const resetAction = StackActions.reset({
        index: 0, 
        actions: [
          NavigationActions.navigate({
            routeName: 'Home',
            params: {
              name: data.name,
              picture: data.picture
            }
          })
        ]
      });

      this.props.navigation.dispatch(resetAction);
}
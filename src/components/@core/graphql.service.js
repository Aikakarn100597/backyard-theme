

function newQuery(query, variables, options = { fetchPolicy: 'network-only' }) {
  const g = gql`${query}`;
  const operationName = g.definitions[0].name.value;
  const config = {
    headers: {
      'token': localStorage.getItem('auth_app_token') || null,
    },
  };
  return this._http.post(environment.graphql_endpoint, { operationName, query, variables }, config)
    .pipe(
      map(d => d.json()),
      tap(d => {
        if (d.errors && d.errors.length) {
          throw (d.errors);
        }
      }),
      map(d => d.data),
      catchError((err) => {
        this._errorHandle(err);
        return observableThrowError(err);
      }),
    );
}

function newMutation(query, variables): Observable<T> {
  const g = gql`${query}`;
  const operationName = g.definitions[0].name.value;
  const config = {
    headers: {
      'token': localStorage.getItem('auth_app_token') || null,
    },
  };
  return this._http.post(environment.graphql_endpoint, { operationName, query, variables }, config)
    .pipe(
      map(d => d.json()),
      tap(d => {
        if (d.errors && d.errors.length) {
          throw (d.errors);
        }
      }),
      map(d => d.data),
      catchError((err) => {
        this._errorHandle(err);
        return observableThrowError(err);
      }),
    );
}
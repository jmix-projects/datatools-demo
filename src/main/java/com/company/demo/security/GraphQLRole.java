package com.company.demo.security;

import io.jmix.security.role.annotation.GraphQLPolicy;
import io.jmix.security.role.annotation.ResourceRole;

@ResourceRole(name = "GraphQLRole", code = "graph-q-l-role")
public interface GraphQLRole {

    @GraphQLPolicy(operations = "restoreEntities")
    void graphqlPolicy();
}